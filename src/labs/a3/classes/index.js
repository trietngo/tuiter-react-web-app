import './index.css';

function Classes() {
    const color = 'blue';
    const dangerous = true;
    return (
        <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                                   wd-fg-black wd-padding-10px`}>
       Dangerous background
        </div>

    )
};
export default Classes;