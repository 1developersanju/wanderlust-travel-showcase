import { getAuth } from 'firebase/auth';

const BASE_URL = "https://api.cbe.taxi";

async function getAuthToken() {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) {
    throw new Error("No user logged in");
  }
  return user.getIdToken();
}

async function apiRequest(endpoint: string, options: RequestInit = {}) {
  const token = await getAuthToken();
  
  const headers = {
    "Content-Type": "application/json",
    "Authorization": token,
    ...options.headers,
  };

  const requestConfig = {
    ...options,
    headers,
    mode: 'cors' as RequestMode,
    credentials: 'omit' as RequestCredentials,
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, requestConfig);
    
    if (!response.ok) {
      let errorMessage = 'API request failed';
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch (e) {
        // If JSON parsing fails, use status text
        errorMessage = response.statusText;
      }
      throw new Error(errorMessage);
    }

    return response.json();
  } catch (error) {
    let errorMessage = error instanceof Error ? error.message : String(error);
    
    if (errorMessage.includes("Invalid token")) {
      throw new Error("You don't have permission to access this resource");
    } else if (errorMessage.includes("Failed to fetch")) {
      throw new Error("Network error. Please check your connection");
    }
    
    throw new Error(`API request failed: ${errorMessage}`);
  }
}

// Sessions
export async function fetchSessions() {
  return apiRequest("/FetchDocs", {
    method: "POST",
    body: JSON.stringify({
      "Query": {},
      "Paging": { "Page": 1, "Limit": 100 },
      "Collection": "Sessions"
    })
  });
}

// Attendance
export async function markAttendance(sessionId: string, uids: string[]) {
  return apiRequest("/MarkAttendance", {
    method: "POST",
    body: JSON.stringify({ SessionId: sessionId, UIDs: uids }),
  });
}

export async function fetchAttendanceRecords(sessionId?: string, date?: string) {
  const query: any = {};
  if (sessionId) query.SessionId = sessionId;
  if (date) query.Date = date;
  
  return apiRequest("/FetchDocs", {
    method: "POST",
    body: JSON.stringify({
      "Query": query,
      "Paging": { "Page": 1, "Limit": 100 },
      "Collection": "Attendance"
    })
  });
}

// Students
export async function fetchStudents() {
  return apiRequest("/FetchDocs", {
    method: "POST",
    body: JSON.stringify({
      "Query": {},
      "Paging": { "Page": 1, "Limit": 1000 },
      "Collection": "Students"
    })
  });
}

// Batches
export async function fetchBatches() {
  return apiRequest("/FetchDocs", {
    method: "POST",
    body: JSON.stringify({
      "Query": {},
      "Paging": { "Page": 1, "Limit": 100 },
      "Collection": "Batches"
    })
  });
}

// Classes
export async function fetchClasses() {
  return apiRequest("/FetchDocs", {
    method: "POST",
    body: JSON.stringify({
      "Query": {},
      "Paging": { "Page": 1, "Limit": 100 },
      "Collection": "Classes"
    })
  });
}

// Subjects
export async function fetchSubjects() {
  return apiRequest("/FetchDocs", {
    method: "POST",
    body: JSON.stringify({
      "Query": {},
      "Paging": { "Page": 1, "Limit": 100 },
      "Collection": "Subjects"
    })
  });
}

// Staff
export async function fetchStaff() {
  return apiRequest("/FetchDocs", {
    method: "POST",
    body: JSON.stringify({
      "Query": {},
      "Paging": { "Page": 1, "Limit": 100 },
      "Collection": "Staff"
    })
  });
}

// API Types
export interface User {
  Email: string;
  Storage: number;
  Domain: string;
}

export interface FileName {
  FileName: string;
}

export interface UploadResponse {
  message: string;
  documentUrl: string;
}

export interface DeleteResponse {
  message: string;
}

// API Functions
export const api = {
  // Get user information
  getUser: async (): Promise<User> => {
    console.log('Fetching user data...');
    return apiRequest('/GetUser');
  },

  // Fetch all documents
  fetchDocs: async (): Promise<FileName[]> => {
    console.log('Fetching documents...');
    const url = `${BASE_URL}/FetchDocs`;
    
    const response = await fetch(url, {
      headers: {
      },
    });

    console.log(`FetchDocs response status: ${response.status}`);

    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorData.error || errorMessage;
      } catch (e) {
        errorMessage = response.statusText || errorMessage;
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    console.log('Fetched documents:', data);
    return data;
  },

  // Upload file
  uploadFile: async (file: File): Promise<UploadResponse> => {
    console.log('Uploading file:', file.name, 'Size:', file.size);
    const token = await getAuthToken();
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${BASE_URL}/Upload`, {
      method: 'POST',
      headers: {
        'Authorization': token, // Send token without Bearer prefix
      },
      body: formData,
    });

    console.log(`Upload response status: ${response.status}`);

    if (!response.ok) {
      let errorMessage = `HTTP error! status: ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorData.error || errorMessage;
      } catch (e) {
        errorMessage = response.statusText || errorMessage;
      }
      throw new Error(errorMessage);
    }

    const result = await response.json();
    console.log('Upload result:', result);
    return result;
  },

  // Delete document
  deleteDoc: async (fileName: string): Promise<DeleteResponse> => {
    console.log('Deleting document:', fileName);
    return apiRequest('/DeleteDoc', {
      method: 'POST',
      body: JSON.stringify({ FileName: fileName }),
    });
  },
}; 