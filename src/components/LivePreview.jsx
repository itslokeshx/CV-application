export default function LivePreview(prop){
    
    return(
        <div className="cv-preview">
            {/* Header Section */}
            <div className="cv-section">
                <h1 className="cv-name">{prop.name || "Your Name"}</h1>
                <div className="cv-contact">{prop.mail || "your.email@example.com"}</div>
                <div className="cv-contact">{prop.address || "Your Address"}</div>
            </div>

            {/* Professional Summary */}
            {(prop.summary || "").trim() && (
                <div className="cv-section">
                    <h2 className="cv-section-heading">Professional Summary</h2>
                    <p className="cv-text">{prop.summary}</p>
                </div>
            )}

            {/* Education Section */}
            {(prop.school || prop.degree || prop.EdustartDate || prop.EduendDate) && (
                <div className="cv-section">
                    <h2 className="cv-section-heading">Education</h2>
                    <div className="cv-item">
                        <div className="cv-item-title">{prop.school || "University Name"}</div>
                        <div className="cv-item-subtitle">{prop.degree || "Degree Program"}</div>
                        {(prop.EdustartDate || prop.EduendDate) && (
                            <div className="cv-date">
                                {prop.EdustartDate || "Start Date"} - {prop.EduendDate || "End Date"}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Experience Section */}
            {(prop.company || prop.position || prop.startDate || prop.finalDate) && (
                <div className="cv-section">
                    <h2 className="cv-section-heading">Experience</h2>
                    <div className="cv-item">
                        <div className="cv-item-title">{prop.position || "Job Title"}</div>
                        <div className="cv-item-subtitle">{prop.company || "Company Name"}</div>
                        {(prop.startDate || prop.finalDate) && (
                            <div className="cv-date">
                                {prop.startDate || "Start Date"} - {prop.finalDate || "End Date"}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Skills Section */}
            {(prop.skillone || prop.skilltwo || prop.skillthree) && (
                <div className="cv-section">
                    <h2 className="cv-section-heading">Skills</h2>
                    <div className="skills-list">
                        {prop.skillone && <span className="skill-tag">{prop.skillone}</span>}
                        {prop.skilltwo && <span className="skill-tag">{prop.skilltwo}</span>}
                        {prop.skillthree && <span className="skill-tag">{prop.skillthree}</span>}
                    </div>
                </div>
            )}
        </div>
    )
}