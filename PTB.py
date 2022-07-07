# input_file_name = "input.txt"
# output_file_name = "output.txt"

# def print_plan(arg):
#     for i in arg:
#         print(i)

# def log_1(variable):
#     print("+"*50)
#     print(">>>" + variable + "<<<")
#     print("have been added from W")
#     print("Length:", len(variable))
#     print("+"*50)

# def log_2(variable):
#     print("-"*50)
#     print(">>>" + variable + "<<<")
#     print("have been added from P.W.")
#     print("Length:", len(variable))
#     print("-"*50)

# def build_pyr(inp, out):
#     try:
#         with open(inp, "r")as input:
#             data = str(input.read())
#             lowest_len = 0
#             previous_words = ""
#             prev_word_len = 0
#             with open(out, "w") as output:
#                 for word in data.replace("\n", " ").split():
#                     current_len = len(word)
#                     if lowest_len < current_len  and prev_word_len == 0:
#                         output.write(word + "\n")
#                         log_1(word)
#                         lowest_len = current_len
#                         continue
#                     if lowest_len >= current_len:
#                         previous_words += word + " "
#                         prev_word_len = len(previous_words)
#                         if lowest_len < prev_word_len -1:
#                             output.write(previous_words + "\n")
#                             log_2(previous_words)
#                             lowest_len = prev_word_len
#                             previous_words = ""
#                             prev_word_len = 0
#                         if lowest_len >= prev_word_len:
#                             continue
#     except FileNotFoundError:
#         with open(input_file_name, "w") as adder:
#             pass
#         with open(output, "w") as adder:
#             pass
#         build_pyr(inp, out)

# def adjust(file):
#     with open(file, "r") as out_cecker:
#         text_plan = out_cecker.readlines()
#         length = 0
#         new_text_plan = []
#         for each in text_plan:
#             if length == len(each) - 1:
#                 new_text_plan.append(each.replace(" ", "  ", 2))
#             else:
#                 new_text_plan.append(each)
#                 length = len(each)
#         with open(file, "w") as out_correcter:
#             for i in new_text_plan:
#                 out_correcter.write(i)

# def shorten_pyr(file):
#     with open(file, "r") as shortening:
#         text_plan = shortening.readlines()
#         new_text_plan = []
#         for idx, line in enumerate(text_plan):
#             if (int(idx)+1) % 2 == 0:
#                 new_text_plan.append(prev.replace("\n", " ") + line)
#                 prev = ""
#             else:
#                 prev = line
#         with open(file, "w") as change:
#             for i in new_text_plan:
#                  change.write(i)


# build_pyr(input_file_name, output_file_name)
# adjust(output_file_name)
# # shorten_pyr(output_file_name)


