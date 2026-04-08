import {createApp} from '../app.js';

export function startServer() {
const app = createApp();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

}