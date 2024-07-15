const Palindromas = () => {
  const isPalindrome = (e) =>
    console.log(
      e.target.value.replaceAll(" ", "").split("").reverse().join("") ===
        e.target.value.replaceAll(" ", "")
        ? "Yra palindromas"
        : "Nėra palindromas"
    );
  return (
    <div>
      <h2>Palindromas</h2>
      <input
        type="text"
        onChange={isPalindrome}
      />
    </div>
  );
};

export default Palindromas;
