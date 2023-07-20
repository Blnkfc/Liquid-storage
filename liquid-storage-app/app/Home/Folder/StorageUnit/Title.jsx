import axios from 'axios';
export default async function Title(props) {
    try {
        const response = await axios.get('https://title.mihir.ch./'+props.url);
        const html = response.data;
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const titleElement = doc.querySelector('title');
        const pageTitle = titleElement.textContent;
        return (
            <div>
                <h1>Page Title:</h1>
                <p>{pageTitle}</p>
            </div>
        );
    } catch (error) {
        console.log(error);
        return (<div>Error retrieving page title.</div>);
    }
}
