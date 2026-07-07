const ResumeRenderer = ({ message }) => {

    const resume = message.data.resume;

    return (

        <div className="space-y-5">

            <p>{message.message}</p>

            <a
                href={resume.file}
                target="_blank"
                rel="noreferrer"
                className="
                inline-block
                px-6
                py-3
                rounded-xl
                bg-cyan-600
                hover:bg-cyan-700
                "
            >
                📄 Download Resume
            </a>

        </div>

    );

};

export default ResumeRenderer;