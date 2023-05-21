import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onEnterValue = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onAddContact } = this.props;

    onAddContact(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
        return (
            <Form onSubmit={handleSubmit}>
              <Label>
                Name
                <Input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  onChange={getName}
                  value={name}
                />
              </Label>
        
              <Label>
                Number
                <Input
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  onChange={getNumber}
                  value={number}
                />
              </Label>
              <Button type="submit" aria-label="Add contact">
                Add contact
              </Button>
            </Form>
          );
        };
        
        ContactForm.propTypes = {
          onAddContact: PropTypes.func.isRequired,
        };
      </form>
    );
  }
}