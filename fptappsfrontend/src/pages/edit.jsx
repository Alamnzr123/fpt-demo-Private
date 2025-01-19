import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Service from '../assets/network-data';

const UpdatePage = () => {
    const navigate = useNavigate();
    const [description, setdescription] = React.useState("");
    const { id } = useParams();

    React.useEffect(() => {
        // eslint-disable-next-line
        if (id == -1) {
            return
        }

        Service.getArtistIdData(id)
            .then((response) => {
                setdescription(response.data)
            })
    }, [id])

    function onSubmit(values) {
        let data = {
            artistName: values.artistName,
            albumName: values.albumName,
            releaseDate: values.releaseDate,
            price: values.price
        }

        if (id === -1) {
            Service.PostArtistData(data)
                .then(() => navigate('/listartist'))
        } else {
            Service.EditArtistData(id, data)
                .then(() => navigate('/listartist'))
        }

        console.log(values);
    }

    function validate(values) {
        let errors = {}
        if (!values.artistName) {
            errors.description = 'Enter a Description'
        } else if (values.artistName.length < 5) {
            errors.description = 'Enter atleast 5 Characters in Description'
        }
        return errors
    }

    return (
        <React.Fragment>
            <h3>Add Artist.</h3>
            <div className="container">
                <Formik
                    initialValues={{ id, description }}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="description" component="div"
                                    className="alert alert-warning" />
                                <fieldset className="form-group">
                                    <label>Artist ID</label>
                                    <Field className="form-control" type="text" name="id" disabled />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Artist Name</label>
                                    <Field className="form-control" type="text" name="artistName" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Album Name</label>
                                    <Field className="form-control" type="text" name="albumName" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Release Date</label>
                                    <Field className="form-control" type="date" name="releaseDate" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Price</label>
                                    <Field className="form-control" type="number" name="price" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>

            </div>
        </React.Fragment >
    )

}

export default UpdatePage;