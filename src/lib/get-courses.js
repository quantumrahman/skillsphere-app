export const getCourses = async (url) => {
    try {
        if (!url) {
            throw new Error('URL is missing');
        }

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch courses: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};
