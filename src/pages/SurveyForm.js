import React, { useState } from 'react'
import { Form, Button, Grid, Segment, Menu } from 'semantic-ui-react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useForm } from '../utils/hooks'
import '../App.css';

const SurveyForm = (props) =>{
    const [errors, setErrors] = useState({})

    const {onChange, onSubmit, value} = useForm(submitSurvey, {
        name: '',
        phone: '',
        college: '',
        whatsapp: '',
        branch: '',
        usn:'',
        semester: '',
        email: ''
    })

    const [addUser, {loading}] = useMutation(REGISTER_USER, {
        update(proxy, {data: {createSurvey: userData}}){
            if(userData.college.toLowerCase() === 'bangalore institute of technology' && (userData.branch.toLowerCase() === 'computer science and enginerring' || userData.branch.toLowerCase() === 'cse' || userData.branch.toLowerCase() === 'computer science')){
                props.history.push('/submitted')

            }else{
                // console.log(userData.college.toLowerCase())
                props.history.push('/submitted')
            }
        },
        onError(err){
            if (err.graphQLErrors[0] !== undefined){
                console.log(err.graphQLErrors[0])
                setErrors(err.graphQLErrors[0].extensions.exception.errors)
            }
            else{
                setErrors({
                    error: "Server Error Try Again"
                })
            }
            // console.log(err.graphQLErrors)
        },
        variables: value
    })

    function submitSurvey(){
        addUser()
    }

    return(
        <Segment inverted color="teal">
            <div>
                {/* <div id="rota_logo">
                <img style={{background: 'white'}} alt="img_3" src="https://firebasestorage.googleapis.com/v0/b/fir-a11e8.appspot.com/o/title_logo.png?alt=media" />
                </div> */}
                <div id="sdi_logo">
                <img alt="img" src='https://firebasestorage.googleapis.com/v0/b/fir-a11e8.appspot.com/o/Untitled%20design.png?alt=media' />
                    <div>SDI CLUB</div>
                </div>
                <div id="bit_logo">
                    <img alt="" src="https://firebasestorage.googleapis.com/v0/b/fir-a11e8.appspot.com/o/bitlogo.png?alt=media" />
                </div>
            </div>
            <Menu secondary size="massive" fluid widths={4}>
                <Menu.Item>
                    
                </Menu.Item>
                <Menu.Item>
                Quiz of Mistakes
                </Menu.Item>
                <Menu.Item>
                    
                </Menu.Item>
            </Menu>
            <Grid>
                <Grid.Row centered >
                    <Grid.Column width={10}>
                        
                    <Form size="massive" onSubmit={onSubmit} noValidate className={loading ? "loading": ""}>
                        <Form.Input
                            label="Name"
                            placeholder="Name"
                            name="name"
                            type="text"
                            value={value.name}
                            onChange={onChange}
                        />
                        <Form.Input
                            label="Email"
                            placeholder="Email"
                            name="email"
                            type="text"
                            value={value.email}
                            onChange={onChange}
                        />
                        <Form.Input
                            label="Phone"
                            placeholder="Phone"
                            name="phone"
                            type="text"
                            value={value.phone}
                            onChange={onChange}
                            maxLength="10"
                            minLength="10"
                        />
                        <Form.Input
                            label="College"
                            placeholder="College"
                            name="college"
                            type="text"
                            value={value.college}
                            onChange={onChange}
                        />
                        <Form.Input
                            label="Usn"
                            placeholder="Usn"
                            name="usn"
                            type="text"
                            value={value.usn}
                            onChange={onChange}
                        />
                        <Form.Input
                            label="Whatsapp (If different than phone)"
                            placeholder="Whatsapp"
                            name="whatsapp"
                            type="text"
                            value={value.whatsapp}
                            onChange={onChange}
                            maxLength="10"
                            minLength="10"
                        />
                        <Form.Input
                            label="Branch"
                            placeholder="Branch"
                            name="branch"
                            type="text"
                            value={value.branch}
                            onChange={onChange}
                        />
                        <Form.Input
                            label="Semester"
                            placeholder="Semester"
                            name="semester"
                            type="text"
                            value={value.semester}
                            onChange={onChange}
                            maxLength="1"
                            minLength="1"
                        />
                        <Button type='submit' color="blue">Submit</Button>
                    </Form>
                    {Object.keys(errors).length > 0 && (
                        <div className="ui error message">
                            <ul className="list">
                                {Object.values(errors).map(value =>(
                                    <li key={value}>{value}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

const REGISTER_USER = gql`
    mutation createSurvey(
        $name: String!
        $phone: String!
        $college: String!
        $usn: String!
        $whatsapp: String
        $branch: String!
        $semester: String!
        $email: String!
    ){
        createSurvey(
            surveyInput:{
                name: $name
                phone: $phone
                college: $college
                usn: $usn
                whatsapp: $whatsapp
                branch: $branch
                semester: $semester
                email: $email
            }
        ){
            id
            college
            branch
        }
    }
`

export default SurveyForm;