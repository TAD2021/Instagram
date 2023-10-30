import Status from "./Status"

function Statuses() {
    return (
        <div className="flex flex-col items-center">
            <div className="max-w-lg w-full flex flex-col items-center shrink-0 mt-4">
                <div className="max-w-md w-full">
                    <Status/>
                </div>
            </div>
        </div>
    )
}

export default Statuses