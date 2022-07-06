import { useState, useEffect } from "react";
import { notification } from "antd";
import axios from "axios";

export const useForm = (validate: any) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [shouldSubmit, setShouldSubmit] = useState(false);

    const openNotificationWithIcon = () => {
        notification["success"]({
            message: "Success",
            description: "Your message has been sent!",
        });
    };

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors(validate(values));

        const webhookURL = "https://api.strello.co/api/user/contact-us";

        if (Object.keys(values).length === 3) {
            axios.post(webhookURL, {
                attachments: [
                    {
                        color: "#2eb886",
                        author_name: values.name,
                        title: values.email,
                        title_link: `mailto:${values.email}`,
                        text: values.message
                    }
                ]
            }, {
                withCredentials: false
            }).then(() => {
                setShouldSubmit(true);
            });
        }
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && shouldSubmit) {
            setValues({
                name: '',
                email: '',
                message: ''
            });
            openNotificationWithIcon();
        }
    }, [errors, shouldSubmit]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
        setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    };
};
