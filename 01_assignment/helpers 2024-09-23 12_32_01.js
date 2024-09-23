import { JSDOM } from 'jsdom';

//this is just a dummy function mimicking the behaviour of the fetch function
//in the browser
export const fetch = fileName => {
    const contents = {
        "file1.json": Promise.resolve({"json": () => Promise.resolve({"a": 1})}),
        "file2.json": Promise.resolve({"json": () => Promise.resolve({"b": 2})})
    };

    return contents[fileName];
}


//this is just a dummy function mimicking the behaviour of document
//in the browser
export const createDocument = html => {
	const dom = new JSDOM(html);
	const document = dom.window.document;
	
	return document;
}