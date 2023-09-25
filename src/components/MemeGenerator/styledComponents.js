// Style your components here

import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const Heading = styled.h1`
  font-family: Open Sans;
  color: #ffffff;
  font-size: 25px;
`

export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
`

export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CustomLabel = styled.label`
  color: #7e858e;
  font-family: Open sans;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 0px;
`

export const CustomInput = styled.input`
  color: #5a7184;
  background-color: #ffffff;
  padding-top: 12px;
  padding-bottom: 12px;
  height: 40px;
  outline: none;
  font-family: 'Open Sans';
  border: 1px solid #d7dfe9;
  padding-right: 14px;
  padding-left: 14px;
  margin-top: 5px;
  margin-bottom: 20px;
`
export const CustomSelect = styled.select`
  color: #1e293b;
  font-family: 'Roboto';
  height: 40px;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  background-color: #ffffff;
`

export const CustomOption = styled.option`
  font-size: 17px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 14px;
  padding-left: 14px;
`
export const CustomButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  max-width: 150px;
  min-width: 250px;
  cursor: pointer;
  outline: none;
`
export const FormAndMemeGenerator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const MemeContainer = styled.div`
background-image:url(${props => props.backgroundImage}) 
display:flex;
flex-direction:column; 
justify-content:space-between;
align-items:center;
text-align:center;
height:300px;

`

export const TextContent = styled.p`
  font-family: 'Roboto';
`
