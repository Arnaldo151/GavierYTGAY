const kerang = (prefix, botName, ownerName) => {
	return `
┏ *〈 ${botName} 〉*
╿
┯ *〈 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑪𝑰𝑶𝑵 𝑫𝑬𝑳 𝑩𝑶𝑻 〉*
   ╽
   ┠≽ *𝑃𝑟𝑒𝑓𝑖𝑗𝑜* : 「  ${prefix}  」
   ┠≽ *𝐶𝑟𝑒𝑎𝑑𝑜𝑟* : ${ownerName}
   ┠≽ *𝑉𝑒𝑟𝑠𝑖𝑜𝑛* : 0.0.5
   ╿
┯┷ *〈 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑪𝑰𝑶𝑵 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : 𝑀𝑜𝑠𝑡𝑟𝑎𝑟 𝑑𝑒𝑡𝑎𝑙𝑙𝑒𝑠 𝑑𝑒𝑙 𝑏𝑜𝑡
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : 𝑀𝑜𝑠𝑡𝑟𝑎𝑟 𝑢𝑠𝑢𝑎𝑟𝑖𝑜𝑠 𝑏𝑙𝑜𝑞𝑢𝑒𝑎𝑑𝑜𝑠
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : 𝑀𝑜𝑠𝑡𝑟𝑎𝑟 𝑡𝑜𝑑𝑜𝑠 𝑙𝑜𝑠 𝑢𝑠𝑢𝑎𝑟𝑖𝑜𝑠 𝑑𝑒𝑙 𝑐ℎ𝑎𝑡
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : 𝑀𝑜𝑠𝑡𝑟𝑎𝑟 𝑣𝑒𝑙𝑜𝑐𝑖𝑑𝑎𝑑 𝑑𝑒𝑙 𝑏𝑜𝑡
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : 𝑅𝑒𝑝𝑜𝑟𝑡𝑎𝑟 𝑏𝑢𝑔 𝑜 𝑒𝑟𝑟𝑜𝑟
╿
┷┯ *〈 KERANG AJAIB 〉*
   ╽
   ┠≽ *${prefix}apakah* <optional>
   ┃ *Desc* : 𝐻𝑎𝑐𝑒𝑟 𝑢𝑛𝑎 𝑝𝑟𝑒𝑔𝑢𝑛𝑡𝑎
   ┠──────────────╼
   ┠≽ *${prefix}bisakah* <optional>
   ┃ *Desc* : 𝑃𝑟𝑒𝑔𝑢𝑛𝑡𝑎𝑟 𝑝𝑢𝑒𝑑𝑒
   ┠──────────────╼
   ┠≽ *${prefix}kapankah* <optional>
   ┃ *Desc* : 𝐶𝑢𝑎𝑛𝑑𝑜 𝑒𝑠
   ┠──────────────╼
   ┠≽ *${prefix}watak*
   ┃ *Desc* : 𝑇𝑟𝑎𝑠𝑚𝑖𝑡𝑖𝑟 𝑐𝑎𝑟𝑎𝑐𝑡𝑒𝑟𝑒𝑠 𝑟𝑎𝑛𝑑𝑜𝑚
   ┠──────────────╼
   ┠≽ *${prefix}hobby*
   ┃ *Desc* : 𝐸𝑛𝑣𝑖𝑜 𝑎𝑙𝑒𝑎𝑡𝑜𝑟𝑖𝑜 𝑑𝑒 𝑝𝑎𝑠𝑎𝑡𝑖𝑒𝑚𝑜𝑠
   ┠──────────────╼
   ┠≽ *${prefix}gantengcek*
   ┃ *Desc* : 𝑄𝑢𝑒 𝑔𝑢𝑎𝑝𝑎
   ┠──────────────╼
   ┠≽ *${prefix}cantikcek*
   ┃ *Desc* : 𝑄𝑢𝑒 ℎ𝑒𝑟𝑚𝑜𝑠@
   ╿ *${ownerName}*,
   ╰╼≽ *𝐶𝑟𝑒𝑎𝑑𝑜𝑟 © ${botName}`
}
exports.kerang = kerang
