export const ProgressBar = ({ progressPercentage }) => {
    return (
        <div className='h-0.5 w-full bg-gray-300'>
            <div
                style={{ width: `${progressPercentage}%`}}
                className={`h-full bg-black `}>
            </div>
        </div>
    );
};