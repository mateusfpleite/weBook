import { languages } from '../utils/languages';
import useGenericState from '../hooks/useGenericState';
import isoConv from 'iso-language-converter';

const INITIAL_STATE = {option: "Language (optional)"}

function SearchBarOptions() {
  const [language, setLanguage] = useGenericState(INITIAL_STATE);
  return (
    <div>
      <select name="option" value={language.option} onChange={setLanguage}>
        <option>{INITIAL_STATE.option}</option>
        {languages.map((lang) => (
          <option key={lang}>{isoConv(lang)}</option>
        ))}
      </select>
    </div>
  );
}

export default SearchBarOptions;
