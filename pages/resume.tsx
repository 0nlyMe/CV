import Bar from "../components/Bar"
import { languages, tools } from "../data"

function resume() {
    return (
        <div className="p-6 py-2">
                {/* Education and Exp */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Educcation</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">BCA</h5>
                        <p className="font-semibold">GLS University(2021-2024)</p>
                        <p className="my-3">I am currently pursuing BCA from GLS University</p>
                    </div>
                </div>

                <div>
                    <h5 className="my-3 text-2xl font-bold">Experiance</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">0</h5>
                        <p className="font-semibold"></p>
                        <p className="my-3">Currently looking for opportunities to gain experiance and knowledge</p>
                    </div>
                </div>
            </div>

            {/* languages and tools */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">
                        Languages & Framework
                    </h5>
                    <div className="my-2">
                        {languages.map(language => (
                            <Bar data={language} key={language.name} />
                        ))}
                    </div>
                </div>

                 <div>
                    <h5 className="my-3 text-2xl font-bold">
                        Tools & Softwares
                    </h5>
                    <div className="my-2">
                        {tools.map(tool => (
                            <Bar data={tool} key={tool.name} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default resume
