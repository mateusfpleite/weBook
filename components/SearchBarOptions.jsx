import isoConv from 'iso-language-converter';

function SearchBarOptions() {
    const languages = ["ar", "de", "en", "es", "fr","hi", "it", "ja", "ko", "pt", "pt-BR", "ru" ]
  return ( 
    <div>
        <select>
            {languages.map((language) => {
                <option>{isoConv(language)}</option>
            })}
        </select>
    </div>
  );
}

export default SearchBarOptions;
