import PropTypes from 'prop-types';
import Image from "next/image";

const Skills = ({ skills, size }) => {
    return (
        <>
            {skills.map(skill => (
                <div key={skill.name} className={`bg-dark flex flex-col items-center justify-center gap-2.5 ${size === 'md' ? 'py-3 px-5' : 'py-3 px-5 lg:py-4 lg:px-6'} rounded-lg min-h-[102px]`}>
                    {skill.image && (
                        <img className={`${size === 'md' ? 'w-8' : 'w-8 lg:w-[70px]'}`} src={`/images/${skill.image}.svg`} alt={`Icône ${skill.name}`} />
                    )}
                    <p className={`text-white ${size === 'md' ? 'text-2xs' : 'text-2xs lg:text-xs'}`}>{skill.name}</p>
                </div>
            ))}
        </>
    );
};

Skills.propTypes = {
    skills: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string,
        })
    ).isRequired,
};

export default Skills;
