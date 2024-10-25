import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
    const careers = useLoaderData()
    return (
        <div className="careers">
            {careers.map(career => (
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>Vietovė: {career.location}</p>
                </Link>
            ))}
        </div>
    )
}

export const careersLoader = async () => {
    const res = await fetch('http://localhost:5000/careers')
    if(!res.ok) {
        throw Error('Nepavyko užkrauti darbo pasiūlymų.')
    }
    return res.json()
}
