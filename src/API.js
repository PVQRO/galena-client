const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/v1' : 'http://localhost:5000/api/v1';

export const postReports = async (report) => {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        // 'Authorization': header.headers.Authorization
      },
      body: JSON.stringify(report)
    }

    return fetch(API_URL+'/reports', options)
            .then(res => res.json());
}

export const getReports = async () => {

    return fetch (API_URL+'/reports')
        .then(res => res.json())
  }