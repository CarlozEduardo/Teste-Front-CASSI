const MessageAlert = ({ text, alertType }) => {
    const classes = {
        "success": "bi-check-circle",
        "danger": "bi-exclamation-circle",
    };

    return (
        <div className={`alert alert-${alertType} d-flex align-items-center`} role="alert">
            <i className={`me-2 bi ${classes[alertType]}`}></i>
            <span>{text}</span>
        </div>
    );
};

export default MessageAlert;