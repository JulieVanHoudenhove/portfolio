import PropTypes from 'prop-types';
import Image from "next/image";

const Skills = ({ skills }) => {
    return (
        <>
            {skills.map(skill => (
                <div key={skill.name} className="bg-dark flex flex-col items-center justify-center gap-2.5 py-4 px-6 rounded-lg min-h-[102px]">
                    {skill.image && (
                        <Image width={70} height={70} src={`/images/${skill.image}.svg`} alt={`Icône ${skill.name}`} />
                    )}
                    <p className="text-white text-xs">{skill.name}</p>
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
