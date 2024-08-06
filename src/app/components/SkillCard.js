"use client";

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from "next/image";

const Skills = ({ jsonFileName }) => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            const response = await fetch(`/data/${jsonFileName}`);
            const data = await response.json();
            setSkills(data);
        };

        fetchSkills();
    }, [jsonFileName]);

    return (
        <main className="w-full flex justify-start flex-row flex-wrap px-56 py-16 gap-9">
            {skills.map(skill => (
                <div key={skill.name} className="bg-dark flex flex-col items-center justify-center gap-2.5 py-4 px-6 rounded-lg min-h-[102px]">
                    {skill.image && (
                        <Image width={70} height={70} src={`/images/${skill.image}.svg`} alt={`Icône ${skill.name}`} />
                    )}
                    <p className="text-white text-xs">{skill.name}</p>
                </div>
            ))}
        </main>
    );
};

Skills.propTypes = {
    jsonFileName: PropTypes.string.isRequired,
};

export default Skills;
