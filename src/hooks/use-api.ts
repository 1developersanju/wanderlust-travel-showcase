import { useState, useEffect } from 'react';
import { api, User, FileName } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

export const useApi = () => {
  const [user, setUser] = useState<User | null>(null);
  const [files, setFiles] = useState<FileName[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  // Load user data
  const loadUser = async () => {
    try {
      setLoading(true);
      const userData = await api.getUser();
      setUser(userData);
    } catch (error) {
      console.error('Error loading user:', error);
      toast({
        title: "Error",
        description: "Failed to load user data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Load files
  const loadFiles = async () => {
    try {
      setLoading(true);
      const filesData = await api.fetchDocs();
      setFiles(filesData);
    } catch (error) {
      console.error('Error loading files:', error);
      toast({
        title: "Error",
        description: "Failed to load files",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Upload file
  const uploadFile = async (file: File) => {
    try {
      setUploading(true);
      const result = await api.uploadFile(file);
      toast({
        title: "Success",
        description: result.message,
      });
      // Reload files after upload
      await loadFiles();
      // Reload user data to update storage usage
      await loadUser();
      return result;
    } catch (error) {
      console.error('Error uploading file:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to upload file",
        variant: "destructive",
      });
      throw error;
    } finally {
      setUploading(false);
    }
  };

  // Delete file
  const deleteFile = async (fileName: string) => {
    try {
      setLoading(true);
      const result = await api.deleteDoc(fileName);
      toast({
        title: "Success",
        description: result.message,
      });
      // Reload files after deletion
      await loadFiles();
      // Reload user data to update storage usage
      await loadUser();
      return result;
    } catch (error) {
      console.error('Error deleting file:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to delete file",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Format storage usage
  const formatStorageUsage = (bytes: number) => {
    const mb = bytes / (1024 * 1024);
    const gb = mb / 1024;
    const totalGB = 1; // 1GB total storage
    
    if (mb < 1024) {
      return `${mb.toFixed(2)} MB / ${totalGB} GB`;
    } else {
      return `${gb.toFixed(2)} GB / ${totalGB} GB`;
    }
  };

  // Get storage percentage
  const getStoragePercentage = (bytes: number) => {
    const totalBytes = 1024 * 1024 * 1024; // 1GB in bytes
    return (bytes / totalBytes) * 100;
  };

  return {
    user,
    files,
    loading,
    uploading,
    loadUser,
    loadFiles,
    uploadFile,
    deleteFile,
    formatStorageUsage,
    getStoragePercentage,
  };
}; 