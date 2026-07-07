const BASE_URL = "http://127.0.0.1:8000/api";

async function request(endpoint) {

  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {

    throw new Error(`API Error: ${response.status}`);

  }

  return await response.json();

}

// =============================
// Portfolio
// =============================

export function getPortfolio() {

  return request("/portfolio/");

}

// =============================
// Projects
// =============================

export function getProjects() {

  return request("/projects/");

}

// =============================
// Skills
// =============================

export function getSkills() {

  return request("/skills/");

}

// =============================
// Experience
// =============================

export function getExperience() {

  return request("/experience/");

}

// =============================
// Certificates
// =============================

export function getCertificates() {

  return request("/certificates/");

}

// =============================
// Contact
// =============================

export function getContact() {

  return request("/contact/");

}