export async function getProjectData(slug) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}data/projects.json`);
    if (!response.ok) {
        throw new Error("Failed to fetch projects data");
    }
    const projects = await response.json();
    return projects.find(project => project.slug === slug);
}
