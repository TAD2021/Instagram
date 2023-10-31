import Status from "./Status"

function Statuses() {
    return (
        <div className="flex flex-col items-center">
            <div className="max-w-lg w-full flex flex-col items-center shrink-0 mt-4">
                <div className="max-w-md w-full">
                    <Status type="img"/>
                    <Status type="video"/>
                </div>
            </div>
        </div>
    )
}

export default Statuses