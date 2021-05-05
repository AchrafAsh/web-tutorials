import fetch from 'isomorphic-fetch'

export default function getFacts() {
    return fetch('https://ssr-react.firsebaseio.com/facts.json')
        .then(res => res.json())
}