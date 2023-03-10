import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';

const Home = ({ repositories }) => (
    <div>
        <Link href="/blog">
            <a>Blog</a>
        </Link>
        { repositories.map(repo => <h1 key={repo.id}>{repo.name}</h1>) }
    </div>
);

Home.getInitialProps = async () => {
    const res = await fetch('https://api.github.com/orgs/rocketseat/repos');
    const repositories = await res.json();

    console.log("a");
    

    return { repositories };
    
}

export default Home;

