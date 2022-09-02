import { languages } from '../utils/languages';
import isoConv from 'iso-language-converter';

function SearchBarOptions() {
  return (
    <div>
      <select>
        <option>Language (optional)</option>
        {languages.map((language) => (
          <option>{isoConv(language)}</option>
        ))}
      </select>
    </div>
  );
}

export default SearchBarOptions;
