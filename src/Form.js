import React from 'react'
import { Form, Input, Button} from 'antd'
const FormItem = Form.Item

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

function normalizeInput(input) {
  // prevent validation failures when typing negative numbers
  if (input.slice(-1) === '-') {
    input = input.substring(0, input.length - 1)
  }
  const commas = input.replace(/,/g, ' ').trim()
  return commas.replace(/\s+/g, ',')
}

class HorizontalLoginForm extends React.Component {
  componentDidMount() {
    this.props.form.validateFields()
  }

  submit = (e) => {
    e.preventDefault()
    const { form, handleSubmit } = this.props
    const { getFieldValue, resetFields, validateFields } = form
    const val = getFieldValue('list')
    const normalized = normalizeInput(val)
    const list = normalized.split(',').map(s => Number(s))
    handleSubmit(list)
    resetFields()
    validateFields()
  }

  validateInput = (rule, value, callback) => {
    if (typeof value === 'undefined' || value.trim() === '') {
      return callback('err')
    }
    // check for comma separated list
    const re = /^((-)?\d+(,(-)?\d+)*)?$/
    const normalized = normalizeInput(value)
    if (normalized.length > 0 && re.test(normalized)) {
      return callback()
    }
    return callback('err')
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form

    // Only show error after a field is touched.
    const listError = isFieldTouched('list') && getFieldError('list')
    const rules = [{
      validator: this.validateInput,
      required: true,
      message: 'Please enter a valid list of whole numbers, separated with a comma or a space' 
    }]
    return (
        <Form layout="horizontal" onSubmit={this.submit}>
          <FormItem
            validateStatus={listError ? 'error' : ''}
            help={listError || ''}
          >
            {getFieldDecorator('list', {
              rules,
            })(
              <Input type="textarea" rows={4} placeholder="1, 2, 3, 4, 5" />
              )}
          </FormItem>
          <FormItem>
            <Button
              ghost="true"
              icon="plus-circle"
              type="primary"
              htmlType="submit"
              disabled={hasErrors(getFieldsError())}
            >
              Add
            </Button>
          </FormItem>
        </Form>
    )
  }
}

export default Form.create()(HorizontalLoginForm)
