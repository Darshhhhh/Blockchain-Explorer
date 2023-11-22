// eslint-disable-next-line react/prop-types
function Receipt({ amountToSend, from, to, hash, blockHash, gas ,blockNumber}) {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="mt-10 bg-emerald-400 p-10 flex flex-col gap-5 rounded-xl font-medium">
        <center>
          <h1 className="text-2xl font-semibold">Tranaction is Done!🎉</h1>
        </center>
        <h1>From🚀 : {from}</h1>
        <h1>To🐱‍🏍: {to}</h1>
        <h1>Amount💲 : {amountToSend}</h1>
        <h1>Block Number🔯: {blockNumber}</h1>
        <h1>Tranaction Hash : {hash}</h1>
        <h1>Block Hash :{blockHash}</h1>
        <h1>Gas🔥: {gas} Gwei</h1>
      </div>
    </div>
  );
}

export default Receipt;
