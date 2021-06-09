import React, { useState } from 'react'
import { Form, Button, Grid, Segment } from 'semantic-ui-react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useForm } from '../utils/hooks'

const SurveyForm = (props) =>{
    const [errors, setErrors] = useState({})

    const {onChange, onSubmit, value} = useForm(submitSurvey, {
        name: '',
        phone: '',
        college: '',
        codechef_id: '',
        whatsapp: '',
        branch: '',
        semester: '',
        email: ''
    })

    const [addUser, {loading}] = useMutation(REGISTER_USER, {
        update(proxy, {data: {createSurvey: userData}}){
            if(userData.college.toLowerCase() === 'bangalore institute of technology' && (userData.branch.toLowerCase() === 'computer science and enginerring' || userData.branch.toLowerCase() === 'cse' || userData.branch.toLowerCase() === 'computer science')){
                props.history.push('/join')

            }else{
                // console.log(userData.college.toLowerCase())
                props.history.push('/submitted')
            }
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables: value
    })

    function submitSurvey(){
        addUser()
    }

    return(
        <Segment inverted color="teal">
            <h1>Survey</h1>
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
                            label="Codechef Id"
                            placeholder="Codechef Id"
                            name="codechef_id"
                            type="text"
                            value={value.codechef_id}
                            onChange={onChange}
                        />
                        <Form.Input
                            label="Whatsapp (If different than phone)"
                            placeholder="Whatsapp"
                            name="whatsapp"
                            type="text"
                            value={value.whatsapp}
                            onChange={onChange}
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
        $codechef_id: String!
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
                codechef_id: $codechef_id
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