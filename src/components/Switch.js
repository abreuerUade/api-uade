import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchLabels(props) {
    return (
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label={props.text} />
      </FormGroup>
    );
  }