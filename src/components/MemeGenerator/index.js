import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  MemeGeneratorForm,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  CustomButton,
  FormAndMemeGenerator,
  MemeContainer,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    backgroundImgUrlInput: '',
    TopTextInput: '',
    BottomTextInput: '',
    backgroundImgUrl: '',
    TopText: '',
    BottomText: '',
    activeFontSizeId: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
  }

  onChangeBackgroundImage = event => {
    this.setState({backgroundImgUrlInput: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({
      TopTextInput: event.target.value,
    })
  }

  onChangeBottomTextInput = event => {
    this.setState({
      BottomTextInput: event.target.value,
    })
  }

  onChangeFontSizeOptionId = event => {
    this.setState({
      activeFontSizeOptionId: event.target.value,
    })
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImgUrlInput,
      TopTextInput,
      BottomTextInput,
      activeFontSizeOptionId,
    } = this.state

    this.setState({
      backgroundImgUrl: backgroundImgUrlInput,
      TopText: TopTextInput,
      BottomText: BottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
    })
  }

  renderMemeGeneratorForm = () => {
    const {
      activeFontSizeOptionId,
      backgroundImgUrlInput,
      TopTextInput,
      BottomTextInput,
    } = this.state

    return (
      <MemeGeneratorForm onSubmit={this.onGenerateMeme}>
        <CustomLabel htmlFor="backgroundImgUrl">Image Url</CustomLabel>
        <CustomInput
          type="text"
          id="backgroundImgUrl"
          value={backgroundImgUrlInput}
          onChange={this.onChangeBackgroundImage}
          placeholder="Enter the Image URL"
        />
        <CustomLabel htmlFor="TopText">Top Text</CustomLabel>
        <CustomInput
          type="text"
          id="TopText"
          value={TopTextInput}
          onChange={this.onChangeTopTextInput}
          placeholder="Enter the Top Text"
        />
        <CustomLabel htmlFor="TopText">Bottom Text</CustomLabel>
        <CustomInput
          type="text"
          id="BottomText"
          value={BottomTextInput}
          onChange={this.onChangeBottomTextInput}
          placeholder="Enter the Bottom Text"
        />
        <CustomLabel htmlFor="TopText">Font Size</CustomLabel>
        <CustomSelect
          id="select"
          value={activeFontSizeOptionId}
          onChange={this.onChangeFontSizeOptionId}
        >
          {fontSizesOptionsList.map(eachOption => (
            <CustomOption key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <CustomButton type="submit">Generate</CustomButton>
      </MemeGeneratorForm>
    )
  }

  renderMeme = () => {
    const {backgroundImgUrl, TopText, BottomText, activeFontSizeId} = this.state

    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImgUrl}>
        <TextContent activeFontSizeId={activeFontSizeId}>{TopText}</TextContent>
        <TextContent activeFontSizeId={activeFontSizeId}>
          {BottomText}
        </TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeGenerator>
            {this.renderMeme()}
            {this.renderMemeGeneratorForm()}
          </FormAndMemeGenerator>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
