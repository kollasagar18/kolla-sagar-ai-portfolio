const BASE_URL = "http://127.0.0.1:8000/api";

async function request(endpoint) {

  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();

}

export const getPortfolio = () => request("/portfolio/");
export const getProjects = () => request("/projects/");
export const getSkills = () => request("/skills/");
export const getExperience = () => request("/experience/");
export const getCertificates = () => request("/certificates/");
export const getContact = () => request("/contact/");