import Link from 'next/link';
import React from 'react';

type CustomLinkProps = {
    href: string;
    title: string;
    description: string;
};

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, description }) => {
    return (
        <Link href = {href}>
            <h2>
                {title}
            </h2>
        </Link>
    )
}

export default CustomLink;