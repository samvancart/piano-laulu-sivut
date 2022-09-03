import { Form, Formik } from "formik";
import FormInput from "./FormInput";
import FormInputBox from "./FormInputBox";
import { CustomerInfoSchema } from "../schemas/CustomerInfoSchema"
import './CustomerInfoForm.css'
import { useState } from "react";

const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    // actions.validateForm();
    // console.log('values: ', values);
    // console.log('actions: ', actions);
};


const CustomerInfoForm = () => {
    const [clickedBtn, setClickedBtn] = useState(false);

    const isClickedBtn = () => setClickedBtn(true);

    return (
        <Formik
            initialValues={{ name: "", email: "", phone: "", info: "" }}
            validationSchema={CustomerInfoSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <h1>Yhteydenottolomake</h1>
                    <FormInput
                        name="name"
                        type="text"
                        placeholder="Nimi *"
                        clickedBtn={clickedBtn}
                    />
                    <FormInput
                        name="email"
                        type="text"
                        placeholder="Sähköposti *"
                        clickedBtn={clickedBtn}
                    />
                    <FormInput
                        name="phone"
                        type="number"
                        placeholder="Puhelinnumero *"
                        clickedBtn={clickedBtn}
                    />
                    <FormInputBox
                        name="info"
                        type="text"
                        placeholder="Lisätiedot (esim. musiikkotoiveet yms.) *"
                        clickedBtn={clickedBtn}
                    />
                    <button
                        className="btn--primary"
                        disabled={isSubmitting}
                        type="submit"
                        onClick={isClickedBtn}

                    >
                        Lähetä
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default CustomerInfoForm;