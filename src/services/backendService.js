// eslint-disable-next-line
export default {
    async getDetails() {
        try {
            const result = await fetch('http://localhost:8086/details/get-details');
            const jsonResult = await result.json();

            return jsonResult;
        } catch (error) {
            console.log("Error while fetching skills", error);
        }
    },

    async getSkills() {
        try {
            const result = await fetch('http://localhost:8086/skills/get-skills');
            const jsonResult = await result.json();

            return jsonResult;
        } catch (error) {
            console.log("Error while fetching skills", error);
        }
    },

    async getYouTubeData() {
        try {
            const result = await fetch('http://localhost:8086/youtube/get-videos');
            const jsonResult = await result.json();

            return jsonResult;
        } catch (error) {
            console.log("Error while fetching YouTube data", error);
        }
    },

    async getInstagramData() {
        try {
            const result = await fetch('http://localhost:8086/instagram/get-posts');
            const jsonResult = await result.json();

            return jsonResult;
        } catch (error) {
            console.log("Error while fetching Instagram data", error);
        }
    },

    async saveCommentsData(commentObject) {
        try {
            const result = await fetch('http://localhost:8086/comments/save-comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(commentObject)
            });

            const jsonResult = await result.json();

            return jsonResult;
        } catch (error) {
            console.log("Error while posting Comments data", error);
        }
    },

    async saveJoinersData(joiningObject) {
        try {
            const result = await fetch('http://localhost:8086/joiners/save-joiner', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(joiningObject)
            });

            const jsonResult = await result.json();

            return jsonResult;
        } catch (error) {
            console.log("Error while posting joiner data", error);
        }
    }
}