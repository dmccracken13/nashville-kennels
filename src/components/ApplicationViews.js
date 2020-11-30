import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeDetail} from "./employee/EmployeeDetail"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                    <Route exact path="/animals" render={
                            props => <AnimalList {...props} />
                        } />
                        <Route exact path="/animals/create" render={
                        props => <AnimalForm {...props} />
                        } />
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <CustomerProvider>
                {/* Render the customer list when http://localhost:3000/customer */}
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <AnimalProvider>
                <LocationProvider>
                    <EmployeeProvider>
                        <Route exact path="/employees" render={
                            props => <EmployeeList {...props} />
                        } />
                        <Route exact path="/employees/create" render={
                        props => <EmployeeForm {...props} />
                        } />
                        
                        {/* New route for showing employee details */}
                        <Route path="/employees/:employeeId(\d+)" render={
                        props => <EmployeeDetail {...props} />
                        } />
                    </EmployeeProvider>
                </LocationProvider>
            </AnimalProvider>
        </>
    )
}