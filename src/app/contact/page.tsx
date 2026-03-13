export default function ContactPage() {
    return (
        <section className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
                <p className="mt-2 text-gray-600">
                    I’m open to new opportunities and collaborations. Feel free to reach
                    out.
                </p>
            </div>

            <div className="space-y-4 text-gray-700">
                <p>
                    <span className="font-medium">Email:</span>{" "}
                    <a
                        href="mailto:kendrawingpro@icloud.com"
                        className="underline hover:text-gray-900"
                    >
                        kendrawingpro@icloud.com
                    </a>
                </p>

                <p>
                    <span className="font-medium">LinkedIn:</span>{" "}
                    <a
                        href="https://linkedin.com/in/kendrawing"
                        target="nopener noreferrer"
                        className="underline hover:text-gray-900"
                    >
                        linkedin.com/in/kendrawing
                    </a>
                </p>

                <p>
                    <span className="font-medium">GitHub:</span>{" "}
                    <a
                        href="https://github.com/kwing25"
                        target="nopener noreferrer"
                        className="underline hover:text-gray-900"
                    >
                        github.com/kwing25
                    </a>
                </p>
            </div>
        </section>
    );
}
