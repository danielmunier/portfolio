import * as Si from 'react-icons/si';
import { skills } from "../data/skills"


const Technologies = () => {

    const iconComponents: any = {

    }
    Object.keys(Si).forEach(key => {
        iconComponents[key] = (Si as any)[key]
    })

    return (
        <div className='grid grid-cols-4 bg-[#151B28] gap-4'>

            {
                skills.map((skill, index) => {
                    const Icon = iconComponents[skill.icon]; 

                    return (
                        <div className='rounded-md'>

                            <div key={index} className=" h-full border-b rounded-md transition-all hover:scale-105 bg-[#1E2330] p-3" style={{ color: skill.color }}>


                                {Icon && <Icon className="w-full h-ful" />}
                                <span className='text-xs  text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors'>{skill.name}</span>

                                
                            </div>

                        </div>

                    );
                })
            }

        </div>
    )
}

export default Technologies