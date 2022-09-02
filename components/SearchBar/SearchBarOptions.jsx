import { languages } from '../../utils/languages';
import isoConv from 'iso-language-converter';

function SearchBarOptions({genericState: {language}, setGenericState}) {
  // console.log(genericState);
  // const {language} = genericState;
  return (
    <div>
      <select name="language" value={language} onChange={setGenericState}>
        <option value={false}>Language (optional)</option>
        {languages.map((lang) => (
          <option key={lang} value={lang}>{isoConv(lang)}</option>
        ))}
      </select>
    </div>
  );
}

export default SearchBarOptions;
