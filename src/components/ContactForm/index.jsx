import React, { useState } from 'react'
import './ContactForm.css'


function ContactForm() {

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	})

	const [errors, setErrors] = useState({
		name: '',
		email: '',
		message: ''
	})

	const validateEmail = (email) => {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return re.test(String(email).toLowerCase())
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
		
		
		const parent = e.target.parentElement

		if (value) {
				parent.classList.add('has-value')
		} else {
				parent.classList.remove('has-value')
		}

		if (!value) {
      setErrors({ ...errors, [name]: 'this field is required' })
    } else if (name === 'email' && !validateEmail(value)) {
      setErrors({ ...errors, [name]: 'invalid email address' })
    } else {
      setErrors({ ...errors, [name]: '' })
    }
  }

	const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message || errors.email) {
      // TODO: display a proper error message
			alert('Please fill out all fields correctly.')
      return;
    }
    // TODO: send form data to server
    alert('Form submitted successfully!')
    console.log(formData)
  }

	return (
		<form onSubmit={handleSubmit}>

			<div className="input-field">
				<label htmlFor="name">name</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder=' '
					value={formData.name}
					// onFocus={handleChange}
					// onBlur={handleChange}
					onChange={handleChange}
					autoComplete="name"
				/>
				{errors.name && <span className="error">{errors.name}</span>}
			</div>
			<div className="input-field">
				<label htmlFor="email">email</label>
				<input
					type="email"
					id="email"
					name="email"
					autoComplete="email"
					placeholder=' '
					// onFocus={handleChange}
					// onBlur={handleChange}
					value={formData.email}
					onChange={handleChange}
				/>
				{errors.email && <span className="error">{errors.email}</span>}
			</div>
			<div className="input-field">
				<label htmlFor="message">message</label>
				<textarea
					id="message"
					name="message"
					autoComplete="off"
					placeholder=' '
					// onFocus={handleChange}
					// onBlur={handleChange}
					value={formData.message}
					onChange={handleChange}
				/>
				{errors.message && <span className="error">{errors.message}</span>}
			</div>

      <button type="submit">submit</button>
    </form>
	)
}

export default ContactForm