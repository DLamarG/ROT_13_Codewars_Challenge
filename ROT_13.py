def rot13(message):
  import re
  alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnoABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNO'
  resLst = []
  for c in message:
    if re.match(r'[a-z]|[A-Z]', c):
      newChar = alpha[alpha.index(c)+13]
      resLst.append(newChar)
    else:
      resLst.append(c)
  return ''.join(resLst)


print(rot13("I really like fast cars"))
print(rot13("EBG13 rknzcyr."))
print(rot13("Guvf vf npghnyyl gur svefg xngn V rire znqr. Gunaxf sbe svavfuvat vg! :)"))