export default function LivePreview(prop){
    
    return(
        <div className="LivePreview">
        <div>
            <h1>{prop.name}</h1>
            <h1>{prop.mail}</h1>
            <h1>{prop.address}</h1>
            <h1>{prop.summary}</h1>
        </div>
         <div>
            <h1>{prop.school}</h1>
            <h1>{prop.degree}</h1>
            <h1>{prop.EdustartDate}</h1>
            <h1>{prop.EduendDate}</h1>
        </div>
         <div>
            <h1>{prop.company}</h1>
            <h1>{prop.position}</h1>
            <h1>{prop.startDate}</h1>
            <h1>{prop.finalDate}</h1>
        </div>
        <div>
            <h1>{prop.skillone}</h1>
                <h1>{prop.skilltwo}</h1>
                    <h1>{prop.skillthree}</h1>
            
        </div>


        </div>
    )
}