function flippingBits(n) {
    const binaryNumber = n.toString(2);
    const bitsNeededTo32Bits = 32 - binaryNumber.length;

    const binaryNumber32Bits = "0".repeat(bitsNeededTo32Bits) + binaryNumber;
    const flippedBits = binaryNumber32Bits
        .split("")
        .map((bit) => (bit === "1" ? "0" : "1"))
        .join("");
    
    const finalNumber = parseInt(flippedBits, 2);

    if (finalNumber < 2 ** 32) {
        return finalNumber;
    }
}

console.log(flippingBits(30));
