function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const str1Map = new Map();
    const str2Map = new Map();

    for (const char of str1) {
        str1Map.set(char, (str1Map.get(char) || 0) + 1);
    }

    for (const char of str2) {
        str2Map.set(char, (str2Map.get(char) || 0) + 1);
    }

    for (const [key, value] of str1Map) {
        if (value !== str2Map.get(key)) {
            return false;
        }
    }

    return true;
}