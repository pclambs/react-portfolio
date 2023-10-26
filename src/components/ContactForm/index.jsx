import './ContactForm.css'

function handleInputChange(e) {
	const parent = e.target.parentElement
	if (e.target.value) {
			parent.classList.add('has-value')
	} else {
			parent.classList.remove('has-value')
	}
}

function ContactForm() {
	return (
		<form>

			<div className="input-field">
				<label htmlFor="name">name</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder=' '
					required
					onFocus={handleInputChange}
					onBlur={handleInputChange}
					onChange={handleInputChange}
					autoComplete="name"
				/>
			</div>
			<div className="input-field">
				<label htmlFor="email">email</label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder=' '
					required
					onFocus={handleInputChange}
					onBlur={handleInputChange}
					onChange={handleInputChange}
					autoComplete="email"
				/>
			</div>
			<div className="input-field">
				<label htmlFor="message">message</label>
				<textarea
					id="message"
					name="message"
					placeholder=' '
					required
					onFocus={handleInputChange}
					onBlur={handleInputChange}
					onChange={handleInputChange}
					autoComplete="off"
				/>
			</div>

      <button type="submit">submit</button>
    </form>
	)
}

export default ContactForm